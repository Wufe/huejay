'use strict';

const DEFAULT_CONFIG = {
  host:     undefined,
  port:     80,
  username: undefined,
  timeout:  15000,
};

/**
 * Client
 *
 * Serves as client to the bridge
 */
class Client {
  /**
   * Constructor
   *
   * @param {Object} config Configuration
   */
  constructor(config) {
    this.config    = Object.assign({}, DEFAULT_CONFIG, config);
    this.accessors = {};
    this.transport = undefined;
  }

  /**
   * Get host
   *
   * @return {string} Host
   */
  get host() {
    return this.config.host;
  }

  /**
   * Set host
   *
   * @param {string} host Host
   */
  set host(host) {
    this.config.host = host;
  }

  /**
   * Get port
   *
   * @return {int} Port
   */
  get port() {
    return this.config.port;
  }

  /**
   * Set port
   *
   * @param {int} port Port
   */
  set port(port) {
    this.config.port = Number(port);
  }

  /**
   * Get username
   *
   * @return {string} Username
   */
  get username() {
    return this.config.username;
  }

  /**
   * Set username
   *
   * @param {string} username Username
   */
  set username(username) {
    this.config.username = username;
  }

  /**
   * Get timeout
   *
   * @return {int} Timeout
   */
  get timeout() {
    return this.config.timeout;
  }

  /**
   * Set timeout
   *
   * @param {int} timeout Timeout
   */
  set timeout(timeout) {
    this.config.timeout = Number(timeout);
  }

  /**
   * Get bridge accessor
   *
   * @return {mixed} Bridge accessor
   */
  get bridge() {
    if (!this.accessors['bridge']) {
      const bridge = require('./Accessor/Bridge');
      this.accessors['bridge'] = new bridge(this);
    }
    return this.accessors['bridge'];
  }

  /**
   * Get portal accessor
   *
   * @return {mixed} Portal accessor
   */
  get portal() {
    if (!this.accessors['portal']) {
      const portal = require('./Accessor/Portal');
      this.accessors['portal'] = new portal(this);
    }
    return this.accessors['portal'];
  }

  /**
   * Get internet services
   *
   * @return {mixed} Internet services accessor
   */
  get internetServices() {
    if (!this.accessors['internetServices']) {
      const internetServices = require('./Accessor/InternetServices');
      this.accessors['internetServices'] = new internetServices(this);
    }
    return this.accessors['internetServices'];
  }

  /**
   * Get sofware update accessor
   *
   * @return {mixed} Software update accessor
   */
  get softwareUpdate() {
    if (!this.accessors['softwareUpdate']) {
      const softwareUpdate = require('./Accessor/SoftwareUpdate');
      this.accessors['softwareUpdate'] = new softwareUpdate(this);
    }
    return this.accessors['softwareUpdate'];
  }

  /**
   * Get users accessor
   *
   * @return {mixed} Users accessor
   */
  get users() {
    if (!this.accessors['users']) {
      const users = require('./Accessor/Users');
      this.accessors['users'] = new users(this);
    }
    return this.accessors['users'];
  }

  /**
   * Get lights accessor
   *
   * @return {mixed} Lights accessor
   */
  get lights() {
    if (!this.accessors['lights']) {
      const lights = require('./Accessor/Lights');
      this.accessors['lights'] = new lights(this);
    }
    return this.accessors['lights'];
  }

  /**
   * Get groups accessor
   *
   * @return {mixed} Groups accessor
   */
  get groups() {
    if (!this.accessors['groups']) {
      const groups = require('./Accessor/Groups');
      this.accessors['groups'] = new groups(this);
    }
    return this.accessors['groups'];
  }

  /**
   * Get scenes accessor
   *
   * @return {mixed} Scenes accessor
   */
  get scenes() {
    if (!this.accessors['scenes']) {
      const scenes = require('./Accessor/Scenes');
      this.accessors['scenes'] = new scenes(this);
    }
    return this.accessors['scenes'];
  }

  /**
   * Get schedules accessor
   *
   * @return {mixed} Schedules accessor
   */
  get schedules() {
    if (!this.accessors['schedules']) {
      const schedules = require('./Accessor/Schedules');
      this.accessors['schedules'] = new schedules(this);
    }
    return this.accessors['schedules'];
  }

  /**
   * Get sensors accessor
   *
   * @return {mixed} Sensors accessor
   */
  get sensors() {
    if (!this.accessors['sensors']) {
      const sensors = require('./Accessor/Sensors');
      this.accessors['sensors'] = new sensors(this);
    }
    return this.accessors['sensors'];
  }

  /**
   * Get rules accessor
   *
   * @return {mixed} Rules accessor
   */
  get rules() {
    if (!this.accessors['rules']) {
      const rules = require('./Accessor/Rules');
      this.accessors['rules'] = new rules(this);
    }
    return this.accessors['rules'];
  }

  /**
   * Get actions accessor
   *
   * @return {mixed} Actions accessor
   */
  get actions() {
    if (!this.accessors['actions']) {
      const actions = require('./Accessor/Actions');
      this.accessors['actions'] = new actions(this);
    }
    return this.accessors['actions'];
  }

  /**
   * Get time patterns accessor
   *
   * @return {mixed} Time patterns accessor
   */
  get timePatterns() {
    if (!this.accessors['timePatterns']) {
      const timePatterns = require('./Accessor/TimePatterns');
      this.accessors['timePatterns'] = new timePatterns(this);
    }
    return this.accessors['timePatterns'];
  }

  /**
   * Get resource links accessor
   *
   * @return {mixed} Resource links accessor
   */
  get resourceLinks() {
    if (!this.accessors['resourceLinks']) {
      const resourceLinks = require('./Accessor/ResourceLinks');
      this.accessors['resourceLinks'] = new resourceLinks(this);
    }
    return this.accessors['resourceLinks'];
  }

  /**
   * Get capabilities accessor
   * 
   * @return {mixed} Capabilities accessor
   */
  get capabilities() {
    if (!this.accessors['capabilities']) {
      const capabilities = require('./Accessor/Capabilities');
      this.accessors['capabilities'] = new capabilities(this);
    }
    return this.accessors['capabilities'];
  }

  /**
   * Get time zones accessor
   *
   * @return {mixed} Time zones accessor
   */
  get timeZones() {
    if (!this.accessors['timeZones']) {
      const timeZones = require('./Accessor/TimeZones');
      this.accessors['timeZones'] = new timeZones(this);
    }
    return this.accessors['timeZones'];
  }

  /**
   * Get transport
   *
   * @return {Transport} Transport (http)
   */
  getTransport() {
    if (!this.transport) {
      const transport = require('./Transport');
      this.transport = new transport(this);
    }
    return this.transport;
  }

  /**
   * Invoke command
   *
   * @param {mixed} command Command
   *
   * @return {mixed} Result from command
   */
  invokeCommand(command) {
    return command.invoke(this);
  }
}

module.exports = Client;
