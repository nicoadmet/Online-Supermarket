import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components'

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear();
    return (
        <div id="section_footer">

            <div className='text-center py-4'>
            <Link href="https://campus.academianumen.com/" target="_blank" className='btn btn-link'>
                Privacy
            </Link>
            <span>|</span>
            <Link href="https://campus.academianumen.com/" target="_blank" className='btn btn-link'>
                Terms
            </Link>
            <span>|</span>
            <Link href="https://campus.academianumen.com/" target="_blank" className='btn btn-link'>
                Contact
            </Link>
            <Paragraph>Copyright © {current_year}, ACADEMIA NUMEN. All Rights Reserved.</Paragraph>
            </div>
      </div>
    );
  }
}

export default Footer;

const Paragraph = styled.p`
color: #fff;
font-size:.7em;
`






