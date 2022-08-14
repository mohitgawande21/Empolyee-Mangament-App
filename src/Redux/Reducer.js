import { ADD_EMPLOYEE, NUMBER,ALL_CHECKBOX, LOAD_EMPLOYEE, DELETE_EMPLOYEE, SAVE_EMPLOYEE, DELETE_EMPLOYEES } from "./ActionTypes"

// const Employee_List_Local_Storage = localStorage.getItem("Employee_List_Local_Storage")
// Employee_List_Local_Storage ? JSON.parse(Employee_List_Local_Storage) :
const initialState = {
    Employee_List: [],
    ArrIndex: 1,
    Page_Limit: 15,
    AllCheckboxValue:{}

}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_EMPLOYEE:
            return {
                ...state, Employee_List: action.payload
            }
        case ADD_EMPLOYEE:
            return {
                ...state, Employee_List: [...state.Employee_List, action.payload]
            }

        case DELETE_EMPLOYEE:
            const remainingEmployee = state.Employee_List.filter((Employee) => {
                return Employee.Id !== action.payload
            })
            return {
                ...state, Employee_List: remainingEmployee
            }

        case SAVE_EMPLOYEE:
            const SavedEmployee = state.Employee_List.map((Employee) => {
                if (Employee.Id === action.payload.Id) {
                    Employee = action.payload
                }
                return Employee
            })
            return {
                ...state, Employee_List: SavedEmployee
            }
        case DELETE_EMPLOYEES:
            var deletedEmployees = state.Employee_List.filter((Employee) => {
                return Employee.Select !== true
            })
            return {
                ...state, Employee_List: deletedEmployees, Checked_Items: [], Checked_Clear_Item: []
            }


        case NUMBER:
            return {
                ...state, ArrIndex: action.payload
            }
        case ALL_CHECKBOX: {
            return {
                ...state,AllCheckboxValue:action.payload
            }
        }
        default:
            return state;
    }
}