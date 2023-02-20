import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './component/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Ước gì',
            singer: 'Mỹ Tâm'
        },
        {
            id: 2,
            name: 'Có chàng trai viết lên cây',
            singer: 'Phan Mạnh Quỳnh'
        },
        {
            id: 3,
            name: 'Cùng nhau đi trốn',
            singer: 'Đen Vây'
        }
    ]
    return (

        <div>
            <h1>Có thể bạn sẻ thấy</h1>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;