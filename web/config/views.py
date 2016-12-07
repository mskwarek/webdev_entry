## @file web/views.py
#  @brief main server interface to client

"""
main interface to server
"""

import django.http
import json
import traceback

from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse

#all modules should be imported here

import AtBashCoderPython
import AtBashCoderPython.views

## for test working server
def index(request):
    """for test working server"""
    #return django.http.HttpResponse("MyApp server" )
    return render_to_response('tresc.html', {}, context_instance=RequestContext(request))

def ajax(request, module, function):
    """dispatch ajax requests"""
    try:
        fun = getattr(getattr(globals()[str(module)], 'views'), str(function))
        data = json.dumps( fun(request.GET) )
        return django.http.HttpResponse(data, content_type='application/json')
    except Exception as e:
        return django.http.HttpResponseNotFound("myapp ajax error: " + str(traceback.format_exc()) )
    except:
        return django.http.HttpResponseNotFound("myapp ajax system error " )
