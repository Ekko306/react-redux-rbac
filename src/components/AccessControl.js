import React from "react";
import { connect } from "react-redux"

// userPermissions 可能是 [
//     "read:stats",
//     "control:reactor",
//     "control:emergencyalert",
//     "write:hourlychecks"
//   ]
// allowedPermissions 可能是 ["read:stats"] 这种
const checkPermissions = (userPermissions, allowedPermissions) => {
    // 默认情况
    if (allowedPermissions.length === 0) {
        return true
    }

    // 这里操作是遍历所有权限 userPermissions里的 单个 看单个有没有在允许的 allowedPermission数组里
    return userPermissions.some(permission => allowedPermissions.includes(permission))
}

const AccessControl = ({
    user,
    userPermissions = [],
    allowedPermissions = [],
    children,
    renderNoAccess = () => <div>没有权限</div>,
    accessCheck,
    extraAccessData,
}) => {
    let permitted
    if (accessCheck) {
        permitted = accessCheck(extraAccessData, user) && checkPermissions(userPermissions, allowedPermissions);
    } else {
        permitted = checkPermissions(userPermissions, allowedPermissions);
    }
    if (permitted) {
        return children
    } else {
        return renderNoAccess();
    }
}

const mapStateToProps = state => ({
    user: state.user,
    userPermissions: state.user && state.user.permissions
})

export default connect(mapStateToProps)(AccessControl)