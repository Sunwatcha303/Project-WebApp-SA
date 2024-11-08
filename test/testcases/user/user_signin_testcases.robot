*** Settings ***
Resource        ../../keywords/user/post_signin_keyword.robot
Resource        ../../config.robot
Variables       user_signin.yaml

Library    Telnet

*** Test Cases ***
TESTCASE_01 success - post signin
    [Documentation]    signin to server
    Given Connect database
    And Prepare insert user data    ${success.predata.value}
    And Execute insert data    ${success.predata.table}    ${success.predata.key}
    Run Keyword And Continue On Failure  Call api for post signin    ${BACKEND.API_KEY}    ${success.data}
    Run Keyword And Continue On Failure  Verify response http status    ${success.status_code}
    Run Keyword And Continue On Failure  Verify response body    ${success.expect}
    Then Execute Delete Data    ${success.predata.table}    ${success.predata.column}    ${success.predata.value.username}
    And Disconnect database

TESTCASE_02 fail - post signin without api key
    [Documentation]    signin without api key
    Given Connect database
    And Prepare insert user data    ${success.predata.value}
    And Execute insert data    ${success.predata.table}    ${success.predata.key}
    Run Keyword And Continue On Failure  Call api for post signin    ${null}    ${fail.without_api_key.data}
    Run Keyword And Continue On Failure  Verify response http status    ${fail.without_api_key.status_code}
    Run Keyword And Continue On Failure  Verify response body    ${fail.without_api_key.expect}
    Then Execute Delete Data    ${success.predata.table}    ${success.predata.column}    ${success.predata.value.username}
    And Disconnect database

TESTCASE_03 fail - post signin wrong password
    [Documentation]    signin with wrong password
    Given Connect database
    And Prepare insert user data    ${success.predata.value}
    And Execute insert data    ${success.predata.table}    ${success.predata.key}
    Run Keyword And Continue On Failure  Call api for post signin    ${BACKEND.API_KEY}    ${fail.wrong_password.data}
    Run Keyword And Continue On Failure  Verify response http status    ${fail.wrong_password.status_code}
    Run Keyword And Continue On Failure  Verify response body    ${fail.wrong_password.expect}
    Then Execute Delete Data    ${success.predata.table}    ${success.predata.column}    ${success.predata.value.username}
    And Disconnect database

TESTCASE_04 fail - post signin no username
    [Documentation]    signin with no username
    Given Connect database
    And Prepare insert user data    ${success.predata.value}
    And Execute insert data    ${success.predata.table}    ${success.predata.key}
    Run Keyword And Continue On Failure  Call api for post signin    ${BACKEND.API_KEY}    ${fail.wrong_username.data}
    Run Keyword And Continue On Failure  Verify response http status    ${fail.wrong_username.status_code}
    Run Keyword And Continue On Failure  Verify response body    ${fail.wrong_username.expect}
    Then Execute Delete Data    ${success.predata.table}    ${success.predata.column}    ${success.predata.value.username}
    And Disconnect database
