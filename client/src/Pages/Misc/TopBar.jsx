import {
  Box,
  Flex,
  Heading,
  Spacer,
  Menu,
  MenuButton,
  MenuGroup,
  MenuDivider,
  MenuList,
  MenuItem,
  IconButton,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { FaAnkh } from "react-icons/fa";
import { removeToken } from "../../Api/Auth/AuthService.jsx";

export function TopBar() {
  function handleLogout() {
    removeToken();
    window.location.reload(false);
  }
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box py="8">
        <Heading as={ReactLink} to="/" size="md" color={"teal"}>
          Teebay
        </Heading>
      </Box>
      <Spacer />
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Profile"
          icon={<FaAnkh />}
          variant={"outline"}
          colorScheme="teal"
        >
          Profile
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem as={ReactLink} to="/profile">
              My Account
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Preferences">
            <MenuItem onClick={handleLogout}>Log out</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
}
