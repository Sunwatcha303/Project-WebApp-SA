*** Settings ***
Resource        ../../keywords/user/post_signup_keyword.robot
Resource        ../../config.robot
Variables       user_signup.yaml


*** Test Cases ***
TESTCASE_01 success - post signup
    When Call api for post signup    ${BACKEND.API_KEY}    ${success.testdata.data}
    Then Verify response http status    ${success.status_code}
    And Verify response body    ${success.expect}
    Then Connect database
    And Execute delete data    ${success.testdata.table}    ${success.testdata.column}    ${success.testdata.data.username}
    And Disconnect database

TESTCASE_02 fail - post signup without api key
    When Call api for post signup    ${null}    ${fail.without_api_key.testdata}
    Then Verify response http status    ${fail.without_api_key.status_code}
    And Verify response body    ${fail.without_api_key.expect}

TESTCASE_03 fail - post signup duplicate username
    Given Connect database
    And Prepare Insert User Data    ${fail.duplicate_username.testdata}
    And Execute insert data    ${fail.duplicate_username.predata.table}    ${fail.duplicate_username.predata.key}
    When Call api for post signup    ${BACKEND.API_KEY}    ${fail.duplicate_username.testdata}
    Then Verify response http status    ${fail.duplicate_username.status_code}
    And Verify response body    ${fail.duplicate_username.expect}
    Then Execute delete data    ${fail.duplicate_username.predata.table}    ${fail.duplicate_username.predata.column}    ${fail.duplicate_username.testdata.username}
    And Disconnect database