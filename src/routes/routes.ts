const getUrl = (rota: string) => {
  return rota;
};

export const routes = {
  dashboard: getUrl('/dashboard'),
  telaAssistentes: getUrl('/assistentes'),
};
