import random

from django.test import TestCase
import uuid

# Create your tests here.
from djreact.models import ManagedObject


class TestManageObjectsCase(TestCase):
    TYPES_OBJECTS = ['line_item', 'campaign', 'insersion_order']
    print uuid.uuid4().hex

    def setUp(self):
        pass

    def generate_Managed_entity(self):
        for i in range(0, 10, 1):
            # self.name = uuid.uuid4().hex
            type = self.TYPES_OBJECTS[random.randint(0, 2)]
            object_id = random.randint(29000, 70257372)
            ManagedObject.objects.create(object_id=object_id, type=type)
            managed_object = ManagedObject.objects.get(object_id=object_id)
            for i in range(0, 10, 1):
                pass
