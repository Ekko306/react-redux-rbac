const userSafetyInspector = {
    name: "Safety Inspector",
    permissions: ["read:stats"],
    nationality: "USA"
};

const userNKScientist = {
    name: "North Korean Scientist",
    permissions: [
        "read:stats",
        "control:reactor",
        "control:emergencyalert",
        "write:hourlychecks"
    ],
    nationality: "North Korea"
};

export { userSafetyInspector, userNKScientist}