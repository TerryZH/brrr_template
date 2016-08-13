const mapStateToSearchBarConfig = (state) => {
  return state
}

const mapStateToVisibleJobs = (state) => {
  return { jobs: JOBS.filter((job)=>{
    if (!state.isFulltime)
      if (job.contract_type==='FT')
        return false
    if (!state.isParttime)
      if (job.contract_type==='PT')
        return false
    if (state.keyword)
      if (state.keyword.length>0)
        if ( ! (job.organization+'\n'+job.location+'\n'+job.job_title).toLowerCase().includes(state.keyword.toLowerCase()) )
          return false
    return true
  }) }
}

const mapDispatchtoSearchBarConfig = (dispatch) => {
  return {
    onChangeKeyword: (e)=>{
      dispatch(changeKeyword(e.target.value))
    },
    onToggleFulltime: ()=>{
      dispatch(toggleFulltime())
    },
    onToggleParttime: ()=>{
      dispatch(toggleParttime())
    }
  }
}

const FilterBar = ReactRedux.connect(mapStateToSearchBarConfig, mapDispatchtoSearchBarConfig)(FilterBarTemplate)
const VisibleJobList = ReactRedux.connect(mapStateToVisibleJobs)(JobListTemplate)