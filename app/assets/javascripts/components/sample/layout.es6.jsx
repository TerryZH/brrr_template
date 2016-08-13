const Sample = () => (
  <ReactRedux.Provider store={Redux.createStore(reducer)}>
    <div className="row">
      <div className="col-md-4">
        <FilterBar />
      </div>
      <div className="col-md-8">
        <VisibleJobList />
      </div>
    </div>
  </ReactRedux.Provider>
)
