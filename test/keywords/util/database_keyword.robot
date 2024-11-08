*** Settings ***
Resource    ../../config.robot


*** Keywords ***
Connect database
    ${db_host}=    Set Database Host Variable
    Connect To Database    pymysql    ${DATABASE.NAME}    ${DATABASE.USERNAME}    ${DATABASE.PASSWORD}    ${db_host}   ${DATABASE.PORT}

Disconnect database
    Disconnect From Database

Execute insert data
    [Arguments]    ${table}    ${columns}
    ${sql}=    Set Variable    INSERT INTO ${table} ${columns} VALUES (${val})
    Log    ${sql}
    ${success}=    Execute Sql String    ${sql}

Execute delete data
    [Arguments]    ${table}    ${key}    ${value}
    ${sql}=    Set Variable    DELETE FROM ${table} WHERE ${key} = '${value}'
    ${success}=    Execute Sql String    ${sql}