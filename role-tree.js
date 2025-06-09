export const roleList = [
    {
        "roleId": "MARKETPLACE_ADMIN",
        "roleName": "MARKETPLACE_ADMIN",
        "description": "role.description.MARKETPLACE_ADMIN",
        "categoryKey": "ProjectRole",
        "categoryTypeCode": "ROLE",
        "roleProperties": [],
        "parentRoleIds": [],
        "childRoleIds": [
            "MARKETPLACE_VIEWER",
            "Project.Marketplace.Order.Create",
            "Project.Marketplace.Order.Update",
            "Project.Marketplace.Order.Delete"
        ]
    },
    {
        "roleId": "MARKETPLACE_VIEWER",
        "roleName": "MARKETPLACE_VIEWER",
        "description": "role.description.MARKETPLACE_VIEWER",
        "categoryKey": "ProjectRole",
        "categoryTypeCode": "ROLE",
        "roleProperties": [],
        "parentRoleIds": [
            "MARKETPLACE_ADMIN"
        ],
        "childRoleIds": [
            "Project.Product.List",
            "Project.Marketplace.Order.List"
        ]
    },
    {
        "roleId": "Project.Marketplace.Order.Create",
        "roleName": "Project.Marketplace.Order.Create",
        "description": "role.description.Project.Marketplace.Order.Create",
        "categoryKey": "ProjectRole",
        "categoryTypeCode": "PERMISSION",
        "roleProperties": [],
        "parentRoleIds": [
            "MARKETPLACE_ADMIN"
        ],
        "childRoleIds": []
    },
    {
        "roleId": "Project.Marketplace.Order.Delete",
        "roleName": "Project.Marketplace.Order.Delete",
        "description": "role.description.Project.Marketplace.Order.Delete",
        "categoryKey": "ProjectRole",
        "categoryTypeCode": "PERMISSION",
        "roleProperties": [],
        "parentRoleIds": [
            "MARKETPLACE_ADMIN"
        ],
        "childRoleIds": []
    },
    {
        "roleId": "Project.Marketplace.Order.List",
        "roleName": "Project.Marketplace.Order.List",
        "description": "role.description.Project.Marketplace.Order.List",
        "categoryKey": "ProjectRole",
        "categoryTypeCode": "PERMISSION",
        "roleProperties": [],
        "parentRoleIds": [
            "MARKETPLACE_VIEWER"
        ],
        "childRoleIds": []
    },
    {
        "roleId": "Project.Marketplace.Order.Update",
        "roleName": "Project.Marketplace.Order.Update",
        "description": "role.description.Project.Marketplace.Order.Update",
        "categoryKey": "ProjectRole",
        "categoryTypeCode": "PERMISSION",
        "roleProperties": [],
        "parentRoleIds": [
            "MARKETPLACE_ADMIN"
        ],
        "childRoleIds": []
    },
    {
        "roleId": "Project.Product.List",
        "roleName": "Project.Product.List",
        "description": "role.description.Project.Product.List",
        "categoryKey": "ProjectRole",
        "categoryTypeCode": "PERMISSION",
        "roleProperties": [],
        "parentRoleIds": [
            "MARKETPLACE_VIEWER"
        ],
        "childRoleIds": []
    }
]