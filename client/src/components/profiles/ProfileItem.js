import React from 'react'
import Link from 'react-router-dom'
import PropTypes from 'prop-types'

const ProfileItem = props => ({
   
    profile: {
        user: { _id, name, avatar },
        status,
        company,
        location,
        skills
    }
    }) => {
        return (
            <div>
                test
            </div>
        )
    }

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileItem
