#include "AtBashCode.h"

char AtBashCode::codeChar(char beforeCoding)
{
  if(beforeCoding <= 'Z' && beforeCoding >= 'A'){
    return 'A'+'Z' - beforeCoding;
  }
  else if(beforeCoding <= 'z' && beforeCoding>='a'){
    return 'a'+'z'-beforeCoding;
  }
  else{
    return beforeCoding;
  }
}

std::string AtBashCode::Code(std::string ToCode)
{
  std::string toReturn;
  for(auto c : ToCode)
    toReturn += codeChar(c);
  return toReturn;
}

std::string AtBashCode::Decode(std::string ToDecode){
  return AtBashCode::Code(ToDecode);
}
