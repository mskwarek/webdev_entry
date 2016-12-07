"""version interface module. Return database version, database connecting strings and application build version"""

import AtBash


def Decode(params):
    text = str(params['text'])
    """the calculation from C++ library"""
	
    return {
        "decoded" : AtBash.Decode(text)
    }
    
def Code(params):
    text = str(params['text'])
    """the calculation from C++ library"""
	
    return {
        "coded" : AtBash.Code(text)
    }
