import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  addComments: {
    id: 'ora-grading.CriterionFeedback.addCommentsLabel',
    defaultMessage: 'Add comments',
    description: 'label for editable feedback field',
  },
  comments: {
    id: 'ora-grading.CriterionFeedback.commentsLabel',
    defaultMessage: 'Comments',
    description: 'label for read-only feedback field',
  },
  optional: {
    id: 'ora-grading.CriterionFeedback.optional',
    defaultMessage: '(Optional)',
    description: 'addtional label for optional feedback field',
  },
  optionPoints: {
    id: 'ora-grading.RadioCriterion.optionPoints',
    defaultMessage: '{points} points',
    description: 'criterion option point value display',
  },
  optionLabel: {
    id: 'ora-grading.RadioCriterion.optionLabel',
    defaultMessage: `{label, select,
      Poor {Poor}
      Fair {Fair}
      Good {Good}
      Excellent {Excellent}
      other {{label}}
    }`,
    description: 'label option value display',
  },
  optionExplanation: {
    id: 'ora-grading.CriterionContainer.optionExplanation',
    defaultMessage: `{label, select,
      Poor {Includes little information with few or no details or unrelated details. Unsuccessful in attempts to explore any facets of the topic.}
      Fair {Includes little information and few or no details. Explores only one or two facets of the topic.}
      Good {Includes sufficient information and supporting details. (Details may not be fully developed; ideas may be listed.)  Explores some facets of the topic.}
      Excellent {Includes in-depth information and exceptional supporting details that are fully developed. Explores all facets of the topic.}
      other {None}
    }`,
    description: 'explanation option value display',
  },
  optionPrompt: {
    id: 'ora-grading.CriterionContainer.optionPrompt',
    defaultMessage: `{prompt, select,
      Ideas {Determine if there is a unifying theme or main idea.}
      Content {Assess the content of the submission}
      other {None}
    }`,
    description: 'prompt config value display',
  },
  rubricSelectedError: {
    id: 'ora-grading.RadioCriterion.rubricSelectedError',
    defaultMessage: 'Rubric selection is required',
    description: 'Error message when rubric radio did not get selected',
  },
  criterionFeedbackError: {
    id: 'ora-grading.CriterionFeedback.criterionFeedbackError',
    defaultMessage: 'The feedback is required',
    description: 'Error message when feedback is required',
  },
});

export default messages;
