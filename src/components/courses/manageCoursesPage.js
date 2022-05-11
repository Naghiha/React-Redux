import React, { Fragment } from "react";
import { connect } from "react-redux";
import {loadCourses} from "../../redux/actions/courseAction";
import {loadAuthors} from "../../redux/actions/authorAction";
import PropTypes from "prop-types";

class ManageCoursePage extends React.Component {
  componentDidMount() {
      const{courses,authors,loadAuthors,loadCourses} = this.props;
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("something went wrong" + error);
      });
    }
    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("something went wrong" + error);
      });
    }
  }
  render() {
    return (
      <Fragment>
        <h2>Manage Course</h2>
      </Fragment>
    );
  }
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors:PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  };
}

const mapDispatchToProps = {
      loadCourses,
      loadAuthors
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
