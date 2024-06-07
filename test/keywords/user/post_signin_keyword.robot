*** Settings ***
Resource    ../../config.robot


*** Keywords ***
Call api for post signin
    [Arguments]    ${api_key}    ${body}
    ${headers}=    Create Dictionary    x-api-key=${api_key}
    ${host}=    Set Host Variable
    Create Session    post_signin    http://${host}:${BACKEND.PORT}
    Log    ${body}
    ${response}=    POST On Session    post_signin    ${post_signin_url}    headers=${headers}    json=${body}    expected_status=any
    Set Test Variable    ${response}
    Log    ${response.text}
    RETURN    ${response}
