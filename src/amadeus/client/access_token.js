class AccessToken {
  constructor(client) {
    this.client = client;
  }

  bearerToken() {
    return this.client.unauthenticatedPost('/v1/security/oauth2/token', {
      'grant_type' : 'client_credentials',
      'client_id' : this.client.clientId,
      'client_secret' : this.client.clientSecret
    }).then((response) => {
      return response.data['access_token'];
    });
  }
}

export default AccessToken;
