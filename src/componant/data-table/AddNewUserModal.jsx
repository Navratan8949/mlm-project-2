import React, { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react";
import { statusOptions } from "./data";
import { capitalize } from "./utils";

const AddNewUserModal = ({ visible, onClose, onAddUser }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [team, setTeam] = useState("");
    const [status, setStatus] = useState(statusOptions[0].uid);

    const handleAddUser = () => {
        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            role,
            team,
            status,
            avatar: "", // Add a default avatar or leave it empty
        };

        onAddUser(newUser);
        onClose();
    };

    return (
        <Modal closeButton aria-labelledby="modal-title" open={visible} onClose={onClose}>
            <ModalHeader>
                <span id="modal-title">Add New User</span>
            </ModalHeader>
            <ModalBody>
                <Input
                    fullWidth
                    label="Name"
                    placeholder="Enter user's name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    fullWidth
                    label="Email"
                    placeholder="Enter user's email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    fullWidth
                    label="Role"
                    placeholder="Enter user's role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
                <Input
                    fullWidth
                    label="Team"
                    placeholder="Enter user's team"
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                />
                <Dropdown>
                    <DropdownTrigger>
                        <Button variant="flat" css={{ mt: "$4" }}>
                            {capitalize(status)}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Status selection"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={new Set([status])}
                        onSelectionChange={(keys) => setStatus(Array.from(keys)[0])}
                    >
                        {statusOptions.map((statusOption) => (
                            <DropdownItem key={statusOption.uid} className="capitalize">
                                {capitalize(statusOption.name)}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </ModalBody>
            <ModalFooter>
                <Button auto flat color="error" onClick={onClose}>
                    Cancel
                </Button>
                <Button auto onClick={handleAddUser}>
                    Add User
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default AddNewUserModal;
