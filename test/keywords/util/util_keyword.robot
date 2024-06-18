*** Settings ***
Resource    ../../config.robot


*** Keywords ***
Set Host Variable
    IF    '${ENV}' == 'development'
        ${host}=    Set Variable    ${BACKEND.HOST_DEV}
    ELSE
        ${host}=    Set Variable    ${BACKEND.HOST_PROD}
    END
    RETURN    ${host}


Set Database Host Variable
    IF    '${ENV}' == 'development'
        ${host}=    Set Variable    ${DATABASE.HOST_DEV}
    ELSE
        ${host}=    Set Variable    ${DATABASE.HOST_PROD}
    END
    RETURN    ${host}

Verify response http status
    [Arguments]    ${expected_status}
    Should Be Equal As Integers    ${expected_status}    ${response.status_code}

Verify response body
    [Arguments]    ${expected}
    &{json}=    Set Variable    ${response.json()}
    Log    ${json}
    ${name}=       Set Variable    ${json.name}
    ${desc_th}=    Set Variable    ${json.desc_th}
    ${desc_en}=    Set Variable    ${json.desc_en}
    Should Be Equal    ${expected.name}    ${name}
    Should Be Equal    ${expected.desc_th}    ${desc_th}
    Should Be Equal    ${expected.desc_en}    ${desc_en}

Prepare Insert User Data
    [Arguments]    ${data}
    ${val}=    Set Variable    '${data["username"]}', '${data["email"]}', '${data["password"]}', '${data["fullname"]}'
    Set Test Variable    ${val}