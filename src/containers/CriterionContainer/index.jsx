import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form } from '@edx/paragon';
import { FormattedMessage } from '@edx/frontend-platform/i18n';

import { selectors } from 'data/redux';
import { gradeStatuses } from 'data/services/lms/constants';

import InfoPopover from 'components/InfoPopover';
import RadioCriterion from './RadioCriterion';
import CriterionFeedback from './CriterionFeedback';
import ReviewCriterion from './ReviewCriterion';
import messages from './messages';

/**
 * <CriterionContainer />
 */
export const CriterionContainer = (props) => {
  const {
    config, isGrading, orderNum, gradeStatus,
  } = props;
  return (
    <Form.Group>
      <Form.Label className="criteria-label">
        <span className="criteria-title">
          <FormattedMessage {...messages.optionPrompt} values={{ prompt: config.label }} />
        </span>
        <InfoPopover>
          {config.options.map((option) => (
            <div key={option.name} className="help-popover-option">
              <strong>
                <FormattedMessage {...messages.optionLabel} values={{ label: option.label }} />
              </strong>
              <br />
              <FormattedMessage {...messages.optionExplanation} values={{ label: option.label }} />
            </div>
          ))}
        </InfoPopover>
      </Form.Label>
      <div className="rubric-criteria">
        {isGrading || gradeStatus === gradeStatuses.graded ? (
          <RadioCriterion orderNum={orderNum} isGrading={isGrading} />
        ) : (
          <ReviewCriterion orderNum={orderNum} />
        )}
      </div>
      <CriterionFeedback orderNum={orderNum} isGrading={isGrading} />
    </Form.Group>
  );
};

CriterionContainer.defaultProps = {};

CriterionContainer.propTypes = {
  isGrading: PropTypes.bool.isRequired,
  orderNum: PropTypes.number.isRequired,
  // redux
  config: PropTypes.shape({
    prompt: PropTypes.string,
    feedback: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        explanation: PropTypes.string,
        label: PropTypes.string,
        name: PropTypes.string,
        points: PropTypes.number,
      }),
    ),
  }).isRequired,
  gradeStatus: PropTypes.oneOf(Object.values(gradeStatuses)).isRequired,
};

export const mapStateToProps = (state, { orderNum }) => ({
  config: selectors.app.rubric.criterionConfig(state, { orderNum }),
  gradeStatus: selectors.grading.selected.gradeStatus(state),
});

export const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CriterionContainer);
