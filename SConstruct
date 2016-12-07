# -*- mode: Python; -*-
import os, platform, subprocess, re, time, ConfigParser, shutil, sys, signal

MYAPP_VER_MAJOR = '0'
MYAPP_VER_MINOR = '03'

WEB_SRV_PREFIX = 'srvmyapp'
WEB_SRV_HOST = '127.0.0.1'
WEB_SRV_PORT = '50007'
WEB_CLIENT_HOST = '192.168.1.10'#127.0.0.1
WEB_CLIENT_PORT = '8001'

MYAPP_VER_MAJOR = '0'
MYAPP_VER_MINOR = '08'
MYAPP_VER_COMPILATION = '0'
MYAPP_VER_INSTALL = '1'

#odczytuje wersje kompilacji z wersji repozytorium
ver_repository = subprocess.Popen('hg sum', shell=True, stdout=subprocess.PIPE).communicate()[0]
try:
    MYAPP_VER_COMPILATION = re.search('(?<=parent: )\d+', ver_repository).group()
except BaseException:
    pass

MYAPP_VER_STRING = str(MYAPP_VER_MAJOR) + '.' + str(MYAPP_VER_MINOR) + '.' + MYAPP_VER_COMPILATION

#web
WWW_BROWSER_WINDOWS='chrome'
WWW_BROWSER_LINUX='google-chrome'
WEB_SRV_PREFIX = 'srvmyapp'
WEB_SRV_HOST = '127.0.0.1'
WEB_SRV_PORT = '50007'
WEB_CLIENT_HOST = '127.0.0.1'
WEB_CLIENT_PORT = '9000'

#database
DB_NAME='mydb'
DB_USER='mydb'
DB_PASSWORD='mydb'

Export('MYAPP_VER_MAJOR MYAPP_VER_MINOR MYAPP_VER_COMPILATION MYAPP_VER_INSTALL')
Export('WWW_BROWSER_WINDOWS WWW_BROWSER_LINUX')
Export('WEB_SRV_PREFIX WEB_SRV_HOST WEB_SRV_PORT WEB_CLIENT_HOST WEB_CLIENT_PORT')
Export('DB_NAME DB_USER DB_PASSWORD')


Export('MYAPP_VER_MAJOR MYAPP_VER_MINOR')
Export('WEB_SRV_PREFIX WEB_SRV_HOST WEB_SRV_PORT WEB_CLIENT_HOST WEB_CLIENT_PORT')

vars = Variables('custom.py')

env = Environment(variables=vars)

SConscript(['AtBashCoder/SConscript', 'web/SConscript'], exports=['env'] )

