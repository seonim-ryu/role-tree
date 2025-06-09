export const topRoles = [
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
        "parentRoleIds": [],
        "childRoleIds": [
            "Project.Product.List",
            "Project.Marketplace.Order.List"
        ]
    },
    {
        "roleId": "Project.Marketplace.Order.List",
        "roleName": "Project.Marketplace.Order.List",
        "description": "role.description.Project.Marketplace.Order.List",
        "categoryKey": "ProjectRole",
        "categoryTypeCode": "PERMISSION",
        "roleProperties": [],
        "parentRoleIds": [],
        "childRoleIds": []
    }
]; 