export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const failedObject = (oldstate) => {
    return {
        ...oldstate,
        loading: false,
        error: true
    }
}