*** Settings ***
Resource    ../../config.robot


*** Keywords ***
Call api for post signup
    [Arguments]    ${api_key}    ${body}
    ${headers}=    Create Dictionary    x-api-key=${api_key}
    ${host}=    Set Host Variable
    Create Session    post_signup    http://${host}:${BACKEND.PORT}
    Log    ${body}
    ${response}=    POST On Session    post_signup    ${post_signup_url}    headers=${headers}    json=${body}    expected_status=any
    Set Test Variable    ${response}
    Log    ${response.text}
    RETURN    ${response}