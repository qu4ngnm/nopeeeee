import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container">
                    <h1 className="masthead-heading mb-0">Nguyen Quang</h1>
                    <h2 className="masthead-subheading mb-0">Sinh Viên Năm 2 <br/> Ngành An Toàn Thông Tin</h2>
                    <a href="https://www.facebook.com/qtiliji/" target="_blank" className="btn btn-primary btn-xl rounded-pill mt-5">Facebook của tôi</a>
                    </div>
                </div>
                <div className="bg-circle-1 bg-circle" />
                <div className="bg-circle-2 bg-circle" />
                <div className="bg-circle-3 bg-circle" />
                <div className="bg-circle-4 bg-circle" />
            </header>

        );
    }
}

export default Header;