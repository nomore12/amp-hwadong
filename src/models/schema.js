export const schema = {
    "models": {
        "Posts": {
            "name": "Posts",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "desc": {
                    "name": "desc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "Type"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Posts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Type": {
            "name": "Type",
            "values": [
                "NOTICE",
                "REPORT"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.3.2",
    "version": "4d14f2d4d5fb752dcc5ed85dee6c97ce"
};