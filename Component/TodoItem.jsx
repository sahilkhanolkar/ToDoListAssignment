import React,{useState} from "react";
import { View } from "react-native";

function ToDoList(props){
    return <View>
    <li style={{ textDecoration: scratch? "line-through":"none" }}>{props.todoItem}</li>
    </View>
}

export default ToDoList;