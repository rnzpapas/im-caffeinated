from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CoffeeSerializer
from .models import Coffee
# Create your views here.
@api_view(['GET'])
def coffee_list(request):
    
    if request.method == "GET":
        coffee = Coffee.objects.all()
        serializer = CoffeeSerializer(coffee, many=True)
        return Response(serializer.data)
    # data = {
    #     "coffee": "Spanish latte",
    #     "price": 189.00
    # }
    # return Response(data=data, status=status.HTTP_200_OK)