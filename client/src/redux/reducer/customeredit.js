


export function handle_edit(state={},action){
switch(action.type){
    case "userdetail" : 
    console.log("payload"+action.payload.name)
    return {...state,...action.payload};
  default :return state;
}
}

export function edit_user(state={  },action){
    switch(action.type){
        case "edituser":return {...state,...action.payload};
        case "notedit" :return {...state,...action.payload}
        default:return state;
    }
}


