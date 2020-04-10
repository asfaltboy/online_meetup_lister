from datetime import datetime

# https://meetup-api.readthedocs.io/en/latest/meetup_api.html
from meetup.api import Client

# https://secure.meetup.com/meetup_api/console/?path=/find/topic_categories
TOPIC_IDS = {"python": 1064}

DUMMY_FILE = "./python_groups_result.json"
GROUP_KEYS_TO_INCLUDE = [
    'name',
    'description',
    'link',
    'timezone',
    'key_photo.photo_link',
    'members',
    'localized_location',
]


def get_deep_value(value, key):
    for part in key.split('.'):
        if part not in value:
            return None
        value = value[part]
    return value


def get_upcoming_events(topic):
    # verify if the following call paginates to the end
    # data = client.GetFindGroups(topic_id=topic_id)

    with open(DUMMY_FILE) as file:
        data = json.load(file)
    groups_with_events = (grp for grp in data if "next_event" in grp)
    sorted_groups = sorted(
        groups_with_events, key=lambda g: g["next_event"]["time"], reverse=True
    )
    events = []
    for group in sorted_groups:
        event = group['next_event']
        event['time'] = event['time'] // 1000
        event['utc_offset'] = event['utc_offset'] // 3600 // 1000
        event['group'] = {
            key: get_deep_value(group, key) for key in GROUP_KEYS_TO_INCLUDE
        }
        events.append(event)
    return events


def insert_groups_into_db(events):
    data = {
        "topic": topic,
        "topic_id": TOPIC_IDS[topic],
        "events": events,
        "updated": datetime.now().isoformat(),
    }


if __name__ == "__main__":
    events = get_upcoming_events("python")
    insert_groups_into_db(events)
