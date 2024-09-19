import { View } from "react-native";
import { ContextProps } from "@/types/types.env";
import { TodoListContext } from "@/context/TodoList";
import { useContext } from "react";
import ScreenLayout from "@/layout/ScreenLayout";
import { styles } from "./styles/Styles";
import Cards from "./ui/Card";
import Buttons from "./ui/Button";
import Checkboxes from "./ui/Checkbox";

const PendingList = () => {
  const { tasks, onDelete, taskStatus, tasksSetter } = useContext(
    TodoListContext
  ) as ContextProps;

  const { statusContainer } = styles;

  return (
    <ScreenLayout>
      {tasks
        .filter((task) => task.status === "Pending")
        .map(({ status, task, description, type, id }) => (
          <Cards title={task} description={description} type={type}>
            <View style={statusContainer} key={type}>
              {taskStatus.map((items, index) => (
                <Checkboxes
                index={index}
                items={items}
                status={status}
                tasks={tasks}
                id={id}
                tasksSetter={tasksSetter}
                color="#fff"
              />
              ))}
              <Buttons
                icon="delete"
                mode="contained"
                onPress={() => onDelete(id)}
                buttonColor="#F44336"
              >
                Delete
              </Buttons>
            </View>
          </Cards>
        ))}
    </ScreenLayout>
  );
};

export default PendingList;
