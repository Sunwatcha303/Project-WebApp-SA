*** Settings ***
Resource        ../../keywords/health/get_health_keyword.robot
Resource        ../../keywords/util/util_keyword.robot
Variables       health.yaml


*** Test Cases ***
TESTCASE_01 success - get health
    [Documentation]    Get health to check server is working
    When Call api for get health
    Then Verify response http status    ${success.status_code}
    And Verify health response body    ${success.expect}
