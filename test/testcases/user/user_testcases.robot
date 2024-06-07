*** Settings ***
Resource        ../../keywords/user/post_signin_keyword.robot
Resource        ../../keywords/util/util_keyword.robot
Resource        ../../config.robot
Variables       user.yaml


*** Test Cases ***
TESTCASE_01 success - post signin
    [Documentation]    signin to server
    When Call api for post signin    ${BACKEND.API_KEY}    ${success.data}
    Then Verify response http status    ${success.status_code}
    And Verify response body    ${success.expect}

TESTCASE_02 fail - post signin without api key
    [Documentation]    signin without api key
    When Call api for post signin    ${null}    ${fail.without_api_key.data}
    Then Verify response http status    ${fail.without_api_key.status_code}
    And Verify response body    ${fail.without_api_key.expect}

TESTCASE_03 fail - post signin wrong password
    [Documentation]    signin with wrong password
    When Call api for post signin    ${BACKEND.API_KEY}    ${fail.wrong_password.data}
    Then Verify response http status    ${fail.wrong_password.status_code}
    And Verify response body    ${fail.wrong_password.expect}

TESTCASE_04 fail - post signin no username
    [Documentation]    signin with no username
    When Call api for post signin    ${BACKEND.API_KEY}    ${fail.wrong_username.data}
    Then Verify response http status    ${fail.wrong_username.status_code}
    And Verify response body    ${fail.wrong_username.expect}
