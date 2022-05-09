import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseAction";
import * as authorActions from "../../redux/actions/authorAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./courseList";

class CoursesPage extends React.Component {
  componentDidMount() {
    if (this.props.courses.length === 0) {
      this.props.actions.loadCourses().catch((error) => {
        alert("something went wrong" + error);
      });
    }
    if (this.props.authors.length === 0) {
      this.props.actions.loadAuthors().catch((error) => {
        alert("something went wrong" + error);
      });
    }
  }
  render() {
    return (
      <Fragment>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </Fragment>
    );
  }
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
