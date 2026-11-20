tasks = []

def show_tasks():
    if len(tasks) == 0:
        print("no tasks in to do list!")
    else:
        print("===TO DO LIST===")
        for i, task in enumerate(tasks, start=1):
            print(f"{i}. {task}")

def main():
    while True:
        print("===TO DO LIST===")
        print("1.View tasks")
        print("2. Add tasks")
        print("3. Remove tasks")
        print("4. Exit\n")

        choice = input("choose an option:")

        if choice == "1":
            show_tasks()
        elif choice == "2":
            task = input("write new task:")
            tasks.append(task)
            print("tasks was added!\n")
        elif choice == "3":
            show_tasks()
            if len(tasks) > 0:
                    try:
                        task_num = int(input("Enter task number to remove: "))
                        removed = tasks.pop(task_num - 1)
                        print(f"Removed: {removed}\n")
                    except:
                        print("Invalid task number.\n")
            else:
                print("no tasks available")
        elif choice == "4":
            print("goodbye")
            break


if __name__ == "__main__":
    main()
