import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MenuToggle from '../../_components/MenuToggle/MenuToggle';
import Backdrop from '../../_components/Backdrop/Backdrop';
import useDisclosure from '../../_hooks/useDisclosure';
import { StyledSidebarDrawer } from './Sidebar.styles';

const Sidebar = () => {
  const { open, onToggle, onClose } = useDisclosure();

  const container = {
    hidden: {},
    visible: {
      transition: {
        ease: 'easeInOut',
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 0, transition: { duration: 0.75, ease: 'easeInOut' } },
    visible: { opacity: 1, y: [15, 0], transition: { duration: 0.75, ease: 'easeInOut' } }
  }

  return (
    <>
      <MenuToggle onClick={onToggle} open={open} />
      <StyledSidebarDrawer visible={open}>
        <motion.ul
          variants={container}
          initial="hidden"
          animate={open ? 'visible' : 'hidden'}
        >
          <motion.li variants={item}><Link legacyBehavior={false} href="/mission" onClick={() => onClose()}>Mission</Link></motion.li>
          <motion.li variants={item}><Link legacyBehavior={false} href="/launches" onClick={onClose}>Launches</Link></motion.li>
          <motion.li variants={item}><Link legacyBehavior={false} href="/career" onClick={onClose}>Career</Link></motion.li>
          <motion.li variants={item}><Link legacyBehavior={false} href="/404" onClick={onClose}>Updates</Link></motion.li>
          <motion.li variants={item}><Link legacyBehavior={false} href="/404" onClick={onClose}>Shop</Link></motion.li>
        </motion.ul>
      </StyledSidebarDrawer>
      <Backdrop onClose={onClose} visible={open} />
    </>
  )
}

export default Sidebar;
