import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">Ana Sayfa</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/notes/">Notlar</NavLink>
						</NavItem>{" "}
						<NavItem>
							<NavLink href="/projects/">Projectler</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/1t1e1">
								GitHub
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
