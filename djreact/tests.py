import logging
import random
from random import randrange
import time
from django.test import TestCase
import uuid

# Create your tests here.
from djreact.models import ManagedObject, ManagedObjectLogEntry


class TestManageObjectsCase(TestCase):
    TYPES_OBJECTS = ['line_item', 'campaign', 'insersion_order', 'domain']

    def test_setUp(self):
        """Generate Managed entities"""
        self.generate_Managed_entity()

    def generate_Managed_entity(self):
        for i in range(0, 15, 1):
            type_obj = self.TYPES_OBJECTS[random.randint(0, 3)]
            object_id = random.randint(29000, 70257372)
            ManagedObject.objects.create(object_id=object_id, type=type_obj)
            managed_object = ManagedObject.objects.get(object_id=object_id)
            found_object_id = managed_object.object_id
            logging.info('found_object={}'.format(found_object_id))
            for i in range(0, 10, 1):
                timestamp = self.randomize_time()
                status = uuid.uuid4().hex
                message = '{}'.format(uuid.uuid4().hex)
                value = random.randint(0, 5000)
                print 'timestamp={} status={} message={} value={} managed_obj_id={}'.format(
                    timestamp, status, message, value, found_object_id
                )
                ManagedObjectLogEntry.objects.create(object_id=managed_object,
                                                     timestamp=timestamp,
                                                     status=status,
                                                     value=value,
                                                     change_message=message)

    @staticmethod
    def randomize_time():
        start_timestamp = time.mktime(time.strptime('Jun 1 2010  01:33:00', '%b %d %Y %I:%M:%S'))
        end_timestamp = time.mktime(time.strptime('Jun 1 2017  12:33:00', '%b %d %Y %I:%M:%S'))
        return time.strftime('%Y-%m-%d %I:%M:%S', time.localtime(randrange(start_timestamp, end_timestamp)))

