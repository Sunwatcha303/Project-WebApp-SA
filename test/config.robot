*** Settings ***
Variables         env.yaml
Variables         url.yaml

Library           RequestsLibrary
Library           DatabaseLibrary
Library           urllib3
Library           DateTime
Library           String
Library           Collections
Library           DateTime
Library           JSONLibrary
Library           OperatingSystem

Resource          ./keywords/util/util_keyword.robot