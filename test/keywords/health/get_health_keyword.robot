*** Settings ***
Resource    ../../config.robot


*** Keywords ***
Call api for get health
    ${host}=    Set Host Variable
    Create Session    get_health    http://${host}:${BACKEND.PORT}
    ${response}=    GET On Session    get_health    ${get_health_url}    expected_status=any
    Set Test Variable    ${response}
    Log    ${response.text}
    RETURN    ${response}

Verify health response body
    [Arguments]    ${expect}
    Log    ${expect}
    Should Be Equal    ${response.text}    ${expect}
