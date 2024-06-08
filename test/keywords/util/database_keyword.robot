*** Settings ***
Resource    ../../config.robot


*** Keywords ***
Connect database
    Connect To Database    pymysql    ${DATABASE.NAME}    ${DATABASE.USERNAME}    ${DATABASE.PASSWORD}    ${DATABASE.HOST}    ${DATABASE.PORT}

Disconnect database
    Disconnect From Database

Execute insert data
    [Arguments]    ${table}    ${columns}
    ${sql}=    Set Variable    INSERT INTO ${table} ${columns} VALUES (${val})
    Log    ${sql}
    ${success}=    Execute Sql String    ${sql}
    Run Keyword If    not ${success}    Rollback

Execute delete data
    [Arguments]    ${table}    ${key}    ${value}
    ${sql}=    Set Variable    DELETE FROM ${table} WHERE ${key} = '${value}'
    ${success}=    Execute Sql String    ${sql}
    Run Keyword If    not ${success}    Rollback

Rollback
    [Documentation]    Rollback database changes.
    ${rollback_sql}=    Set Variable    ROLLBACK
    Execute Sql String    ${rollback_sql}