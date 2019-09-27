function reviewLeftClick (state, actions) {
  return (
    {
      reviewStatus: {
      currentReview: state.reviewStatus.currentReview - 1
    }
  }
  )
}

function reviewRightClick (state, actions) {
  return (
    {
      reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
    }
  }
  )
}

export const actions = {
  reviewRightClick,
  reviewLeftClick
}
