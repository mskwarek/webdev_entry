#include <boost/python.hpp>
#include "AtBashCode.h"

using namespace boost::python;

BOOST_PYTHON_MODULE(AtBash)
{
  boost::python::def("Code", AtBashCode::Code);
  boost::python::def("Decode", AtBashCode::Decode);
}
