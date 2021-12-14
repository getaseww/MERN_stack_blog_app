export const LoginStart=(userCredentials)=>({
    type:"LOGIN_START",
});

export const LoginSuccess=(user)({
    type:"LOGIN_SUCCESS",
    payload:user,
});

export const LoginFailur=()=>({
    type:"LOGIN_FAILUR",
})
export const Logout=()=>({
    type:"LOGOUT",
})