import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem } from "@nextui-org/react";
import { PlusIcon } from "./PlusIcon";

export default function AddNewUser() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    const [newUser, setNewUser] = React.useState({
        id: "",
        name: "",
        email: "",
        age: "",
        role: "",
        team: "",
        status: "active",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleStatusChange = (selectedStatus) => {
        setNewUser((prevUser) => ({
            ...prevUser,
            status: selectedStatus,
        }));
    };

    const handleAddUser = () => {
        // Handle adding the user here
        console.log("New User:", newUser);
        // You can add logic to add the new user to your user list here
        onOpenChange(false);
    };

    return (
        <div className="flex flex-col gap-2">
            <Button className="bg-foreground text-background"
                endContent={<PlusIcon />}
                size="sm"
                onPress={onOpen}
            >
                Add New
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior={scrollBehavior}
                
            >
                <ModalContent >
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Add New User
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    label="ID"
                                    placeholder="Enter user ID"
                                    variant="bordered"
                                    name="id"
                                    value={newUser.id}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    label="Name"
                                    placeholder="Enter user name"
                                    variant="bordered"
                                    name="name"
                                    value={newUser.name}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    label="Email"
                                    placeholder="Enter user email"
                                    variant="bordered"
                                    name="email"
                                    value={newUser.email}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    label="Age"
                                    placeholder="Enter user age"
                                    variant="bordered"
                                    name="age"
                                    value={newUser.age}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    label="Role"
                                    placeholder="Enter user role"
                                    variant="bordered"
                                    name="role"
                                    value={newUser.role}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    label="Team"
                                    placeholder="Enter user team"
                                    variant="bordered"
                                    name="team"
                                    value={newUser.team}
                                    onChange={handleInputChange}
                                />
                                <Select
                                    label="Status"
                                    placeholder="Select status"
                                    variant="bordered"
                                    name="status"
                                    value={newUser.status}
                                    onChange={handleStatusChange}
                                >
                                    <SelectItem key="active" value="active">Active</SelectItem>
                                    <SelectItem key="paused" value="paused">Paused</SelectItem>
                                    <SelectItem key="vacation" value="vacation">Vacation</SelectItem>
                                </Select>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={handleAddUser}>
                                    Add
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}


// import React from "react";
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem } from "@nextui-org/react";
// import { PlusIcon } from "./PlusIcon";

// export default function AddNewUser() {
//     const { isOpen, onOpen, onOpenChange } = useDisclosure();
//     const [newUser, setNewUser] = React.useState({
//         id: "",
//         name: "",
//         email: "",
//         age: "",
//         role: "",
//         team: "",
//         status: "active",
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewUser((prevUser) => ({
//             ...prevUser,
//             [name]: value,
//         }));
//     };

//     const handleStatusChange = (selectedStatus) => {
//         setNewUser((prevUser) => ({
//             ...prevUser,
//             status: selectedStatus,
//         }));
//     };

//     const handleAddUser = () => {
//         // Handle adding the user here
//         console.log("New User:", newUser);
//         // You can add logic to add the new user to your user list here
//         onOpenChange(false);
//     };

//     return (
//         <>
//             <Button
//                 className="bg-foreground text-background"
//                 endContent={<PlusIcon />}
//                 size="sm"
//                 onPress={onOpen}
//             >
//                 Add New
//             </Button>
//             <Modal
//                 isOpen={isOpen}
//                 onOpenChange={onOpenChange}
//                 placement="top-center"
//             >
//                 <ModalContent>
//                     {(onClose) => (
//                         <>
//                             <ModalHeader className="flex flex-col gap-1 text-center">Add New User</ModalHeader>
//                             <ModalBody>
//                                 <Input
//                                     autoFocus
//                                     label="ID"
//                                     placeholder="Enter user ID"
//                                     variant="bordered"
//                                     name="id"
//                                     value={newUser.id}
//                                     onChange={handleInputChange}
//                                 />
//                                 <Input
//                                     label="Name"
//                                     placeholder="Enter user name"
//                                     variant="bordered"
//                                     name="name"
//                                     value={newUser.name}
//                                     onChange={handleInputChange}
//                                 />
//                                 <Input
//                                     label="Email"
//                                     placeholder="Enter user email"
//                                     variant="bordered"
//                                     name="email"
//                                     value={newUser.email}
//                                     onChange={handleInputChange}
//                                 />
//                                 <Input
//                                     label="Age"
//                                     placeholder="Enter user age"
//                                     variant="bordered"
//                                     name="age"
//                                     value={newUser.age}
//                                     onChange={handleInputChange}
//                                 />
//                                 <Input
//                                     label="Role"
//                                     placeholder="Enter user role"
//                                     variant="bordered"
//                                     name="role"
//                                     value={newUser.role}
//                                     onChange={handleInputChange}
//                                 />
//                                 <Input
//                                     label="Team"
//                                     placeholder="Enter user team"
//                                     variant="bordered"
//                                     name="team"
//                                     value={newUser.team}
//                                     onChange={handleInputChange}
//                                 />
//                                 <Select
//                                     label="Status"
//                                     placeholder="Select status"
//                                     variant="bordered"
//                                     name="status"
//                                     value={newUser.status}
//                                     onChange={handleStatusChange}
//                                 >
//                                     <SelectItem key="active" value="active">Active</SelectItem>
//                                     <SelectItem key="paused" value="paused">Paused</SelectItem>
//                                     <SelectItem key="vacation" value="vacation">Vacation</SelectItem>
//                                 </Select>
//                             </ModalBody>
//                             <ModalFooter>
//                                 <Button color="danger" variant="flat" onPress={onClose}>
//                                     Close
//                                 </Button>
//                                 <Button color="primary" onPress={handleAddUser}>
//                                     Add
//                                 </Button>
//                             </ModalFooter>
//                         </>
//                     )}
//                 </ModalContent>
//             </Modal>
//         </>
//     );
// }
