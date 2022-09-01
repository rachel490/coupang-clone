const useShallowRoute = (router: any, pathname: string, query: object) => {
  const originalQuery = router.query;

  router.push(
    {
      pathname: pathname,
      query: { ...originalQuery, ...query },
    },
    undefined,
    { shallow: true }
  );
};

export default useShallowRoute;
